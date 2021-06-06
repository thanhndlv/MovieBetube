export class UserInfo {
  public fullName: string;
  public username: string;
  public password: string;
  public email: string;
  public phone: string;
  public groupId: string;
  public roleId: string;
}

export class Account {
  public username: string;
  public password: string;
}

export class Film {
  public filmId: string;
  public filmName: string;
  public alias: string;
  public trailer: string;
  public image: string;
  public description: string;
  public groupId: string;
  public openingDate: string;
  public review: string;
}

export class MovieSchedule {
  public filmId: string;
  public showTime: string;
  public theaterId: string;
  public fare: string;
}

export class BookingTicket {
  public showTimeId: string;
  public ticketList: TicketList[];
  public username: string;
}

export class TicketList {
  public seatId: string;
  public fare: number;
}``