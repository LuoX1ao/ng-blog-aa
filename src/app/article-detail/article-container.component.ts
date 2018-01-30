import {
  AfterViewInit,
  Component, ComponentFactory, ComponentRef, OnDestroy, ViewChild, OnChanges,
  ViewContainerRef, SimpleChange, OnInit, Input
} from '@angular/core';
import {ArticleDynamicData, DynamicTypeBuilder} from './article-type-builder';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

declare var require: any;

@Component({
    selector: 'app-article-container',
    template: `<ng-template #articleDetail></ng-template>`
})
export class ArticleContainerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  // 动态component的容器
  @ViewChild('articleDetail', { read: ViewContainerRef }) protected container: ViewContainerRef;

  // 动态component
  protected componentRef: ComponentRef<ArticleDynamicData>;

  protected wasViewInitialized = false;

  @Input() resource: any;

  constructor(private route: ActivatedRoute, protected typeBuilder: DynamicTypeBuilder) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      return this.resource = require(`../articles/${params['type']}_${params['id']}.ts`);
    });
  }

  /** Get a Factory and create a component */
  protected refreshContent() {

    if (!this.resource) {
      return;
    }

    this.wasViewInitialized = true;

    if (this.componentRef) {
      this.componentRef.destroy();
    }

    // here we get Factory (just compiled or from cache)
    this.typeBuilder.createComponentFactory(this.resource['innerHtml']).then((factory: ComponentFactory<ArticleDynamicData>) => {

        // Target will instantiate and inject component (we'll keep reference to it)
        this.componentRef = this.container.createComponent(factory);

        // let's inject @Inputs to component instance
        const component = this.componentRef.instance;

        component.source = this.resource.source;

      });
  }

  // this is the best moment where to start to process dynamic stuff
  public ngAfterViewInit(): void {
    this.refreshContent();
  }

  // wasViewInitialized is an IMPORTANT switch
  // when this component would have its own changing @Input()
  // - then we have to wait till view is intialized - first OnChange is too soon
  public ngOnChanges(changes: {[key: string]: SimpleChange}): void {
    if (this.wasViewInitialized) {
      return;
    }
    this.refreshContent();
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
