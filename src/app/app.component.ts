import { Component, ViewChild, ViewContainerRef, Inject, OnInit, OnDestroy, HostListener } from '@angular/core';

import { GroupDescriptor, SortDescriptor, process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';

import { Patient } from './shared/services/backend/model/models';
import { PatientService } from './shared/services/backend/api/api';

const MENU_PATIENT_EDIT: number = 0;
const MENU_PATIENT_REMOVE: number = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pageHeight = window.innerHeight - 35;

  public menuData: Array<any> = [{menuCode: MENU_PATIENT_EDIT, icon: 'pencil', text: 'Edit Patient'},
                                 {menuCode: MENU_PATIENT_REMOVE, icon: 'trash', text: 'Remove Patient'}];

  public loading: boolean = false;
  public state: State = {
    group: Array<GroupDescriptor>(),
    sort: Array<SortDescriptor>(),
    skip: 0,
    take: 10
  }

  public patientData: GridDataResult;
  public patients: Patient[];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.pageHeight = event.target.innerHeight - 35;
  }

  constructor(private patientService: PatientService) {
  }

  private loadGrid(): void {
    this.patientData = process(this.patients, this.state);
  }

  private getPatients() {
    this.patientService.patientGet().subscribe((patients: any) => {
       this.patients = patients;

       this.loadGrid();

       this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      });      
  }

  ngOnInit(): void {
    this.getPatients();
  }

  public onDataStateChange(state: DataStateChangeEvent): void {
    this.state = state;

    this.loadGrid();
  }

  public onPatienRefreshClick(event: any) {
    this.getPatients();
  }

  public onMenuClick(event: any, pallet: any) {
      event.dataItem = pallet;

      if (event.menuCode == MENU_PATIENT_EDIT)
        this.editPatientHandler(event);
      else if (event.menuCode == MENU_PATIENT_REMOVE)
        this.removePatientHandler(event);
  }

  public addPatientHandler(event: any) {
  }

  public editPatientHandler(event: any) {
    const patient: Patient = event.dataItem;
  }

  public removePatientHandler(event: any) {
  }
}
