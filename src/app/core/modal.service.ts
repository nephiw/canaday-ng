import { 
  Injectable, 
  Injector, 
  ComponentFactoryResolver, 
  EmbeddedViewRef, 
  ApplicationRef,
  ComponentRef 
} from '@angular/core';

@Injectable()
export class ModalService {
  private registeredComponents: any[] = [];
  private componentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public register(modal: any): void {
    this.registeredComponents.push(modal);
  }

  public unregister(modalId: string): any {
    const index = this.findIndex(modalId);
    return index > -1 ? this.registeredComponents.splice(index, 1) : null;
  }

  private findIndex(modalId: string): number {
    let index = -1;
    this.registeredComponents.some((modal: any, idx: number) => {
      if (modal.id === modalId) {
        index = idx;
      }
      return modal.id === modalId;
    });
    return index;
  }

  public open(modalId: string) {
    console.log(`A modal with id ${ modalId } was opened.`);
    const component = this.registeredComponents[this.findIndex(modalId)];
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);

    const element = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(element);
  }

  public close() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}
