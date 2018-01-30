import {
  AfterViewInit,
  Component, ComponentFactory, ComponentRef, OnDestroy, ViewChild, OnChanges,
  ViewContainerRef, SimpleChange, OnInit
} from '@angular/core';
import {ArticleDynamicData, DynamicTypeBuilder} from './article-type-builder';
import {ActivatedRoute, Params} from "@angular/router";

declare var require: any;

@Component({
    selector: 'app-article-container',
    template: `<ng-template #articleDetail></ng-template>`
})
export class ArticleContainerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  // componentRef: ComponentRef<ArticleDetailComponent>;
  // 动态component的容器
  @ViewChild('articleDetail', { read: ViewContainerRef }) protected container: ViewContainerRef;

  // 动态component
  protected componentRef: ComponentRef<ArticleDynamicData>;

  protected wasViewInitialized = false;

  private resource: any;

  constructor(
    protected typeBuilder: DynamicTypeBuilder,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.resource = require(`../articles/${params['type']}_${params['id']}.ts`);
    });
  }

  /** Get a Factory and create a component */
  protected refreshContent() {

    if (this.componentRef) {
      this.componentRef.destroy();
    }

    // here we get a TEMPLATE with dynamic content === TODO
    const template = this.resource.innerHtml;

    // here we get Factory (just compiled or from cache)
    this.typeBuilder.createComponentFactory(template).then((factory: ComponentFactory<ArticleDynamicData>) => {

        // Target will instantiate and inject component (we'll keep reference to it)
        this.componentRef = this
          .container
          .createComponent(factory);

        // let's inject @Inputs to component instance
        const component = this.componentRef.instance;

        component.source = this.resource.source;

      });
  }

  /** IN CASE WE WANT TO RE/Gerante - we need cean up */

  // this is the best moment where to start to process dynamic stuff
  public ngAfterViewInit(): void {
    this.wasViewInitialized = true;
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
