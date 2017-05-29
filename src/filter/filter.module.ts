import { NgModule } from '@angular/core'
import { Filter } from './filter.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        Filter
    ],
    exports: [
        Filter,
        CommonModule
    ]
})

export class FilterModule {}
