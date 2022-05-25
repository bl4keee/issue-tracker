import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() issueNo: number | null = null;
  @Output() confirmEventEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  agree() {
    this.confirmEventEmitter.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.confirmEventEmitter.emit(false);
    this.issueNo = null;
  }

}
