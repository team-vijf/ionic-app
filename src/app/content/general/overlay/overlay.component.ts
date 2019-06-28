import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {

  @Input() showContent: boolean;
  @Output() showContentChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  closeContent() {
    this.showContentChange.emit(false);
  }
}
