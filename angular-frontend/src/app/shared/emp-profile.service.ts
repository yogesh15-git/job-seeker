import { Injectable } from '@angular/core';
import {EmpProfile} from '../shared/emp-profile.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpProfileService {

  EProfile:EmpProfile={
    UserId:sessionStorage.getItem('userid'),
    ResumeHeadline:'',
    Degree:'',
    Specialization:'',
    University:'',
    PassoutYear:'',
    Grades:'',
    Skill1:'',
    Skill2:'',
    Skill3:'',
    ProjectTitle:'',
    Running:'',
    Completed:'',
    WorkingFrom:'',
    WorkingTo:'',
    ProjectDescription:'',
    Title:'',
    Institution:'',
    PeriodFrom:'',
    PeriodTo:'',
    Description:'',
    DateOfBirth:'',
    GenderMale:'',
    GenderFemale:'',
    MarritalStatus:'',
    Address:'',
    Pincode:'',
    HomeTown:'',
  

  }

  constructor(private httpclient:HttpClient) { }

  NewRecord1(nEmpProfile:EmpProfile){
    return this.httpclient.post(environment.url+'profile',nEmpProfile)
  }
  
  viewempprofile(id:string){
    return this.httpclient.get(environment.url+'all/'+id);
  }
  
  
}
