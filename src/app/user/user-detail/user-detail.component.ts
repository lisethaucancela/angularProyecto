import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any = {

  }
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getUserById(params['id']).subscribe((data) => {
        this.user = data;
        this.user = this.user.data;
        console.log(this.user); 
      });
      
    });
  }

}
