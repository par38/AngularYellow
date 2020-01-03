import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { MemberModel } from '../models/member.model'

@Injectable()
  
export class MemberService {

  // create a selectedMember from the model - to use with a form
  selectedMember: MemberModel;

  // create an array of members
  membersList: MemberModel[];

  readonly serverURL = 'http://localhost:3004/yellows';

  constructor( private http: HttpClient ) { }
  
  getMembersList() {
    return this.http.get(this.serverURL)
  }

  postMember(memb: MemberModel) {
    return this.http.post(this.serverURL + `/add`, memb)
  }
  
  putMember(memb: MemberModel) {
    return this.http.put(this.serverURL + `/modify/${memb._id}`, memb)
  }

  deleteMember(_id: string) {
    return this.http.delete(this.serverURL + `/delete/${_id}`)
  }
}
