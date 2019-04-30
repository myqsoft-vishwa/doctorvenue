import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	document.body.className = 'hold-transition skin-blue sidebar-mini';
  	$(() => {
          $('#example1').DataTable();
      });
  }

}
