import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-order',
  templateUrl: './company-order.component.html',
  styleUrls: ['./company-order.component.css']
})
export class CompanyOrderComponent implements OnInit {

  items;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: '数据统计',
        icon: 'iconfont icon-shuju'
      },
      {
        label: '商户管理',
        icon: 'iconfont icon-yonghuzu'
      },
      {
        label: '功能管理',
        icon: 'iconfont icon-caidan'
      }
    ];
  }

}
