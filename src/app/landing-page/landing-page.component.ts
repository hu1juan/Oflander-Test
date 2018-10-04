import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../_services/landingPage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(private _LandingPageService: LandingPageService) {}
  categories: any;
  portfolio_holder: any;
  portfolio: any;
  setActive: any;
  ngOnInit() {
    this._LandingPageService.getPortfolio().subscribe(
      res => {
        this.portfolio_holder = res;
        this.portfolio_holder = [...this.portfolio_holder, ...SAMPLE_DATA];
        this.portfolio = this.portfolio_holder;
        console.log(this.portfolio_holder);
      },
      err => {}
    );

    this._LandingPageService.getCategory().subscribe(
      res => {
        this.categories = res;
      },
      error => {}
    );
  }

  setBackground(url) {
    return {
      'background-image': `url('${url}')`
    };
  }

  filter(category?) {
    if (category) {
      this.portfolio = this.portfolio_holder.filter(
        item => item.category.categoryId === category.categoryId
      );
      this.setActive = category.name;
    } else {
      this.portfolio = this.portfolio_holder;
      this.setActive = null;
    }
  }
}

const SAMPLE_DATA = [
  {
    portfolioId: 15,
    title: 'Freelancer',
    image: 'Web/12/4.jpg',
    developerInitials: 'PS',
    link: 'https://www.netflix.com/Login\n\n',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 18,
    title: 'Gmail',
    image: 'Web/12/4.jpg',
    developerInitials: 'TF',
    link: 'https://mail.google.com/mail\n\n',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 13,
    title: 'iStock Photo',
    image: 'Web/12/4.jpg',
    developerInitials: 'ML',
    link: 'https://www.istockphoto.com\n',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 11,
    title: 'jetBlue',
    image: 'Web/12/4.jpg',
    developerInitials: 'JM',
    link: 'https://www.jetblue.com\n',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 12,
    title: 'Lego',
    image: 'Web/12/4.jpg',
    developerInitials: 'MC',
    link: 'https://shop.lego.com\n',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 10,
    title: 'PayPal',
    image: 'Web/12/4.jpg',
    developerInitials: 'FL',
    link: 'https://www.PayPal.com/PH',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 20,
    title: 'Success!',
    image: 'Web/12/4.jpg',
    developerInitials: 'RO',
    link: 'https://www.walmart.com',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 9,
    title: 'The Guardian',
    image: 'Web/12/4.jpg',
    developerInitials: 'JC',
    link: 'https://www.theguardian.com/',
    category: {
      categoryId: 3,
      name: 'Logo Designing'
    }
  },
  {
    portfolioId: 9,
    title: 'The Guardian',
    image: 'Web/13/5.png',
    developerInitials: 'JC',
    link: 'https://www.theguardian.com/',
    category: {
      categoryId: 2,
      name: 'Mobile Applications'
    }
  },
  {
    portfolioId: 14,
    title: 'Upwork',
    image: 'Web/13/5.png',
    developerInitials: 'GS',
    link: 'https://www.upwork.com\n\n',
    category: {
      categoryId: 2,
      name: 'Mobile Applications'
    }
  },
  {
    portfolioId: 19,
    title: 'Walmart',
    image: 'Web/13/5.png',
    developerInitials: 'RA',
    link: 'https://www.walmart.com',
    category: {
      categoryId: 2,
      name: 'Mobile Applications'
    }
  },
  {
    portfolioId: 16,
    title: 'Weather',
    image: 'Web/13/5.png',
    developerInitials: 'JO',
    link: 'https://www.freelancer.ph\n\n',
    category: {
      categoryId: 2,
      name: 'Mobile Applications'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/13/5.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 2,
      name: 'Mobile Applications'
    }
  },
  {
    portfolioId: 9,
    title: 'The Guardian',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.theguardian.com/',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 14,
    title: 'Upwork',
    image: 'Web/10/2.png',
    developerInitials: 'GS',
    link: 'https://www.upwork.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 19,
    title: 'Walmart',
    image: 'Web/10/2.png',
    developerInitials: 'RA',
    link: 'https://www.walmart.com',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 16,
    title: 'Weather',
    image: 'Web/10/2.png',
    developerInitials: 'JO',
    link: 'https://www.freelancer.ph\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  },
  {
    portfolioId: 17,
    title: 'Youtube',
    image: 'Web/10/2.png',
    developerInitials: 'JC',
    link: 'https://www.youtube.com\n\n',
    category: {
      categoryId: 4,
      name: 'E-Commerce Websites'
    }
  }
];
