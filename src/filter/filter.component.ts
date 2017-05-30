import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'filter',
    templateUrl: './filter.tmpl.html',
})

export class Filter {
    @Input()
    selected: String = ''

    @Input()
    caption: String = ''

    @Input()
    values: String[] = ['']

    @Output()
    onChange: EventEmitter<String> = new EventEmitter<String>()

    handleChange(event) {
        this.onChange.emit(this.selected)
    }
}
