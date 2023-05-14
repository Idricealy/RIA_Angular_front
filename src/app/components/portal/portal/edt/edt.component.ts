import {Component, OnInit} from '@angular/core';
import {EventSettingsModel, MonthService, WeekService} from "@syncfusion/ej2-angular-schedule";
import {StudentService} from "../../../../services/student/student.service";
import {EdtService} from "../../../../services/edt/edt.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edt',
  templateUrl: './edt.component.html',
  providers: [WeekService, MonthService],
  styleUrls: ['./edt.component.css'],

})
export class EdtComponent implements OnInit{
  private user = ''
  private _dataSource: any[] = [];

  isCreate = false

  get dataSource(): any[] {
    return this._dataSource;
  }
  public selectedDate: Date = new Date(2023, 0, 15);

  public eventSettings: EventSettingsModel = {
    dataSource: this.dataSource,
    enableTooltip: true,

  };
  eventForm: FormGroup;

  readonly = false

  onPopupOpen(args: any): void {
    if(!args.data.Id) {
      this.isCreate = true
    }
    const eventDetails = args.data;
    const startDateTime = new Date(eventDetails.StartTime);
    startDateTime.setHours(startDateTime.getHours() + 1);

    const endDateTime = new Date(eventDetails.EndTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    const startDate = startDateTime.toISOString().substr(0, 10);
    const startTime = startDateTime.toISOString().substr(11, 5);
    const endDate = endDateTime.toISOString().substr(0, 10);
    const endTime = endDateTime.toISOString().substr(11, 5);


    if (args.target.classList.contains('e-appointment') && args.type === 'Editor') {
      this.eventForm.patchValue({
        filiere: eventDetails.filiere,
        niveau: eventDetails.niveau,
        type: eventDetails.type,
        StartDate: startDate,
        StartTime: startTime,
        EndDate: endDate,
        EndTime: endTime,
        Id: eventDetails.Id,
        Subject: eventDetails.Subject,
        Description: eventDetails.Description,
        Ue: eventDetails.Ue
      });
    }
  }

  onActionComplete(args: any): void {
    if (args.requestType === 'eventCreate') {

    }
  }

  resetForm(): void {
    this.eventForm.reset();
  }

  onActionBegin(args: any): void {
    console.log(args.requestType)
    if (args.requestType === 'eventChange') {

      const data = {
        filiere: this.eventForm.value.filiere,
        niveau: this.eventForm.value.niveau,
        debut: this.eventForm.value.StartDate + ' ' + this.eventForm.value.StartTime,
        fin: this.eventForm.value.EndDate + ' ' + this.eventForm.value.EndTime,
        type: this.eventForm.value.type
      }

      if (
        data.filiere === '' ||
        data.niveau === '' ||
        data.debut === '' ||
        data.fin === '' ||
        data.type === ''
      ) {
        alert('Veuillez compléter le formulaire');
      } else {
        this.edtService.editEdt(data, this.eventForm.value.Id)
          .subscribe((response) => {
            if(response.success) {
              alert(response.success)
            } else if(response.message) {
              alert(response.message)
            }
            this.loadData()
          },
      (error) => {
            alert("Une erreur s'est produite lors de l'édition de l'emploi du temps");
      })
      }

    } else if(args.requestType === 'eventCreate') {
      this.isCreate = true
      console.log(this.eventForm)
      const data = {
        filiere: this.eventForm.value.filiere,
        niveau: this.eventForm.value.niveau,
        debut: this.eventForm.value.StartDate + ' ' + this.eventForm.value.StartTime,
        fin: this.eventForm.value.EndDate + ' ' + this.eventForm.value.EndTime,
        type: this.eventForm.value.type,
        cours: this.eventForm.value.Subject,
        ue: this.eventForm.value.Ue
      }

      if (
        data.filiere === '' ||
        data.niveau === '' ||
        data.debut === '' ||
        data.fin === '' ||
        data.type === ''
      ) {
        alert('Veuillez compléter le formulaire');
      } else {

        this.edtService.postNewEdt(data)
          .subscribe((response) => {
              if(response.success) {
                alert(response.success)
              } else if(response.message) {
                alert(response.message)
              }
              this.loadData()
            },
            (error) => {
              alert("Une erreur s'est produite lors de la création de l'emploi du temps");
            })
      }
    }else if(args.requestType === 'eventRemove') {
        console.log(args.data[0].Id)
      this.edtService.removeEdt(args.data[0].Id)
        .subscribe((response) => {
          alert(response.success)
        })
    } else if(args.requestType ==='dateNavigate') {
      this.loadData()
    }
  }


  formatModelDate(dateUnformat: string) : Date {
    var parts = dateUnformat.split(" ");
    var dateParts = parts[0].split("-");
    var timeParts = parts[1].split(":");

    var date = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      parseInt(timeParts[0]),
      parseInt(timeParts[1]),
      parseInt(timeParts[2])
    );

    return date
  }

  constructor(private studentService : StudentService,
              private edtService : EdtService,
              private formBuilder: FormBuilder) {

    this.eventForm = this.formBuilder.group({
      filiere: new FormControl(''),
      niveau: new FormControl(''),
      type: new FormControl(''),
      StartTime: new FormControl(new Date()),
      StartDate: new FormControl(new Date()),
      EndTime: new FormControl(new Date()),
      EndDate: new FormControl(new Date()),
      Id: new FormControl(Number),
      Subject: new FormControl(''),
      Description : new FormControl(''),
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = localStorage.getItem('user')
    this.loadData()
  }


  loadData() {
    this._dataSource = [];
    if( this.user === 'etudiant') {
      this.readonly = true
      this.studentService.getEdt()
        .subscribe((response) => {

          response.data.map((response: any) => {
            const model = {
              Id: Number,
              Subject: '',
              StartTime: null,
              EndTime: null,
              Description : '',
            }

            model.Id = response.id
            model.Subject = response.nom_cours
            // @ts-ignore
            model.StartTime = this.formatModelDate(response.debut)
            // @ts-ignore
            model.EndTime = this.formatModelDate(response.fin)
            model.Description = response.type

            // @ts-ignore
            this._dataSource.push(model);
          })
          this.eventSettings = { ...this.eventSettings, dataSource: this._dataSource };
        })
    } else if (this.user === 'enseignant') {

      this.edtService.getAllEdt()
        .subscribe((response) => {
          response.data.map((response: any) => {
            const model = {
              Id: Number,
              Subject: '',
              StartTime: Date,
              EndTime: Date,
              Description : '',
              filiere: '',
              niveau:'',
              type: ''
            }

            model.Id = response.id
            model.Subject = response.cours
            // @ts-ignore
            model.StartTime = this.formatModelDate(response.debut)
            // @ts-ignore
            model.EndTime = this.formatModelDate(response.fin)
            model.Description = response.filiere
            model.filiere = response.filiere
            model.niveau = response.niveau
            model.type = response.type

            // @ts-ignore
            this._dataSource.push(model);
          })
          this.eventSettings = { ...this.eventSettings, dataSource: this._dataSource };
        })
      console.log(this.dataSource)
    }
  }
}
