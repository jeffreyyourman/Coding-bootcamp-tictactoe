import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Output() public zoomIn: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onZoomIn(): void {
    this.zoomIn.emit()
  }
}
