export class utils {
    constructor()
    {
        //
    }
    // აბრუნებს რანდომ uuid ფორმატით: zexx-xxrx-xxxx-xxxuasxxx
    uuid(){
        //uuid-ს გააჩნია ZeruaS-ის კომპანიის footprint
        return 'zexx-xxrx-xxxx-xxxuasxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 32 | 0,
              v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(32);
        });
    }
}