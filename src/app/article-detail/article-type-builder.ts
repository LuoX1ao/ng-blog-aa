import { OnInit } from '@angular/core';
// import { JitCompiler } from '@angular/compiler';
import { Component, ComponentFactory, NgModule, Input, Injectable, Compiler, ViewChild, ElementRef } from '@angular/core';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

function highlightJsFactory() {
  return hljs;
}

export interface ArticleDynamicData {
  source: Array<string>;
}

@Injectable()
export class DynamicTypeBuilder {

  // wee need Dynamic component builder
  constructor(private compiler: Compiler) {}

  public createComponentFactory(template: string): Promise<ComponentFactory<ArticleDynamicData>> {
    // unknown template ... let's create a Type for it
    const type   = this.createNewComponent(template.trim());
    const module = this.createComponentModule(type);

    return new Promise((resolve) => {
      this.compiler.compileModuleAndAllComponentsAsync(module).then((moduleWithFactories) => {
          const factory = <ComponentFactory<any>> moduleWithFactories.componentFactories.find((item) => {
            return item['componentType'] === type;
          });
          resolve(factory);
        });
    });
  }

  protected createNewComponent (tmpl: string) {
    @Component({
      selector: 'app-dynamic-component',
      styleUrls: ['article-detail.component.css'],
      template: tmpl,
    })
    class CustomDynamicComponent implements ArticleDynamicData {
      @Input() public source: string[];

      showLargeImg(target) {
        target.classList.add('display-block');
      }

      closeLargeImg(target) {
        target.classList.remove('display-block');
      }

    }
    // a component for this particular template
    return CustomDynamicComponent;
  }

  protected createComponentModule (componentType: any) {
    @NgModule({
      imports: [
        HighlightJsModule.forRoot({
          provide: HIGHLIGHT_JS,
          useFactory: highlightJsFactory
        })],
      declarations: [
        componentType
      ],
      entryComponents: [componentType],
    })
    class RuntimeComponentModule {
    }
    // a module for just this Type
    return RuntimeComponentModule;
  }
}
