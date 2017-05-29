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
    change: EventEmitter<String> = new EventEmitter<String>()

    handleChange() {
        this.change.emit(this.selected)
    }
}
