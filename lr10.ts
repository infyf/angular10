˳����� ���� app.module.ts 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IfDirective } from './if.directive';  // ������ ���� ���������
import { ChangeColorDirective } from './change-color.directive';  // ������ ���� ���������
import { ItemComponent } from './item/item.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,// ������ ���� ���������
    ChangeColorDirective,  // ������ ���� ���������
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'item', component: ItemComponent },
      { path: 'item1', component: Item1Component },
      { path: 'item2', component: Item2Component },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
˳����� ����: appIf.��� ��������� �� ������� ��� �������� ������� ���� �� �����,  ������� ��������� �������� �� ��������, ��� ������� � appIf.
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input() appIf: number = 1.2; 

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setScale(this.appIf);
  }

  @HostListener('click') onClick() {
    this.setScale(this.appIf);
  }

  private setScale(scale: number) {
    this.el.nativeElement.style.transform = `scale(${scale})`;
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.color = 'yellow';
  }
}

