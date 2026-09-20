import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from './supabase.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule],
})
export class AppComponent implements OnInit {
    todos: any[] = [];

    constructor(private supabaseService: SupabaseService) { }

    async ngOnInit() {
        await this.loadTodos();
    }

    async loadTodos() {
        const { data, error } = await this.supabaseService.getTodos();
        if (error) {
            console.error('Error fetching todos:', error);
        } else {
            this.todos = data;
        }
    }
}