import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { MemberModel } from '../models/member.model'
import { MemberService } from '../services/member.service'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers: [ MemberService ]
})
  
export class MemberComponent implements OnInit {

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    this.showMembersList()
    this.resetForm();
  }
  

  showMembersList() {
    this.memberService.getMembersList()
      .subscribe((res) => {
      this.memberService.membersList = res as MemberModel[]
    })
  }

  resetForm(form?: NgForm) {
    if (form) 
      form.reset()
    this.memberService.selectedMember = {
      _id: "",
      nom: "",
      mail: "",
      ville: "",
      age: null,
      famille: "",
      role: "",
      password: ""
    }
  }

  onEdit(memb: MemberModel) {
    this.memberService.selectedMember = memb
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.memberService.postMember(form.value)
        .subscribe(() => {
          this.showMembersList()
          this.resetForm(form)
      })
    } else {
      this.memberService.putMember(form.value)
        .subscribe(() => {
          this.showMembersList()
          this.resetForm(form)

      })
    }
  }


  // ////// il delete bien, mais pourquoi il ne refresh pas la liste ??
  onDelete(_id: string) {
    this.memberService.deleteMember(_id)
      .subscribe(() => {
      this.showMembersList()
    })
  }

}
