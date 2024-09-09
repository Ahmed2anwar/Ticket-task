import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';
import { dir } from 'node:console';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartDom!: ElementRef;
  chartInstance!: echarts.ECharts;

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const element = this.chartDom.nativeElement;
    this.chartInstance = echarts.init(element);

    const option = {
      color: ['#8a74f9'],
      title: {
        right: '10px',

        textStyle: {
          fontSize: 16,
          fontWeight: '400',
        },
        subtextStyle: {
          fontSize: 14,
          fontWeight: '400',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#8a74f9',
          },
        },
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            'ديسمبر',
            'نوفمبر',
            'اكتوبر',
            'سبتمبر',
            'أغسطس',
            'يوليو',
            'يونيو',
            'مايو',
            'ابريل',
            'مارس',
            'فبراير',
            'يناير',
          ],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Line 1',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#8a74f9',
              },
              {
                offset: 1,
                color: '#8a74f9',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [
            50, 160, 180, 250, 90, 340, 250, 140, 232, 101, 264, 90, 340, 250,
          ], // Data for the single series
        },
      ],
    };

    this.chartInstance.setOption(option);
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }
}
