export class Exercise {
    name: string;
}

export class User {
    name: string = "Firstname Lastname";
    exercises: Exercise[] = [];
}

export class Entry {
    user: User;
    users: User[] = [new User()];
    exercises: Exercise[] = [];
}
