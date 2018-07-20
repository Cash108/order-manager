import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-statistics',
  templateUrl: './data-statistics.component.html',
  styleUrls: ['./data-statistics.component.css']
})
export class DataStatisticsComponent implements OnInit {

  select_city1;
  select_city2;
  select_city3;
  select_time;
  city1_condition = '';
  city2_condition = '';
  city3_condition = '';
  time_condition = '';
  start_time;
  end_time;

  constructor() {
  }

  ngOnInit() {
    this.select_city1 = [
      {label: '宁夏', value: 'NY'},
      {label: '宁夏', value: 'RM'},
      {label: '宁夏', value: 'LDN'},
      {label: '宁夏', value: 'IST'},
      {label: '宁夏', value: 'PRS'}
    ];

    this.select_city2 = [
      {label: '银川', value: 'NY'},
      {label: '银川', value: 'RM'},
      {label: '银川', value: 'LDN'},
      {label: '银川', value: 'IST'},
      {label: '银川', value: 'PRS'}
    ];

    this.select_city3 = [
      {label: '兴庆区', value: 'NY'},
      {label: '兴庆区', value: 'RM'},
      {label: '兴庆区', value: 'LDN'},
      {label: '兴庆区', value: 'IST'},
      {label: '兴庆区', value: 'PRS'}
    ];

    this.select_time = [
      {label: '今天', value: '1'},
      {label: '最近七天', value: '2'},
      {label: '最近30天', value: '3'},
    ];
  }

}
