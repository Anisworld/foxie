import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class UsernamePageForm {
    
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    createForm(): FormGroup {
        return this.formBuilder.group({
            username: ['',[Validators.required]]
        });
    }
}