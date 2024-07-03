import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  Title = 'About Page';

  videoList = [
    {
      name: 'Video 1',
      slug: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      name: 'Video 2',
      slug: 'https://www.youtube.com/watch?v=Ex8WBLqudWs'
    },
    {
      name: 'Video 3',
      slug: 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getEmbedUrl(item: any): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.getVideoId(item.slug)}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private getVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }
}
