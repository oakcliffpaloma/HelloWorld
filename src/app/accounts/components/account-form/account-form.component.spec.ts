import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountFormComponent } from './account-form.component';

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let fixture: ComponentFixture<AccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
    component.myAccount = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('accountForm', () => {
    it('should be invalid when name is blank', () => {
      component.accountForm.patchValue({
        name: ''
      });

      expect(component.accountForm.valid).toBeFalsy();
    });

    it('should be invalid when email is not valid email', () => {
      component.accountForm.patchValue({
        name: 'adfasdf',
        email: 'dflkalsklkf'
      });

      expect(component.accountForm.valid).toBeFalsy();
    });
  });
});
