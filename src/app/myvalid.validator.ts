import {AbstractControl, ValidationErrors} from '@angular/forms';

export function myvalid(ac: AbstractControl) : ValidationErrors | null
{

    //if(ac.value.startsWith('A'))
    if(ac.value < 5000)
    {

        return {myvalid:true};

    }
    return null;
}