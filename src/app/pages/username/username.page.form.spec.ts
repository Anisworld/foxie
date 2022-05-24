import { FormBuilder, FormGroup } from "@angular/forms";
import { UsernamePageForm } from "./username.page.form";

describe('UsernamePageForm', () => {
    
    let usernamePageForm: UsernamePageForm;
    let form: FormGroup;
    beforeEach(() => {
        usernamePageForm = new UsernamePageForm(new FormBuilder());
        form = usernamePageForm.createForm();
    })

    it('should create username form empty', () => {

        expect(form).not.toBeNull();
        expect(form.get('username')).not.toBeNull();
        expect(form.get('username').value).toEqual("");
        expect(form.get('username').valid).toBeFalsy();
    })

    it('should have username if username is not valid', () =>{
        form.get('username').setValue('invalid username');
        
        expect(form.get('username').valid).toBeFalsy();
    })

    it('should have username valid if username is valid', () =>{
        form.get('username').setValue('Anis');

        expect(form.get('username').valid).toBeTruthy();
    })

    it('should have a valid form', () => {
        form.get('username').setValue('Anis');

        expect(form.valid).toBeTruthy();
    })

})