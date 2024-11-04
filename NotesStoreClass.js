class NotesStore {
    //add your code here
    constructor() {
        this.notes = [];
    }
        
    addNote(state, name) {
        if(!name) throw new Error('Name cannot be empty');

        const validStates = ['completed', 'active', 'others']; 
        if (!validStates.includes(state)) throw new Error(`Invalid state ${state}`);
        
        this.notes.push({state, name});
    }
    
    getNotes(state) {
        const validStates = ['completed', 'active', 'others'];
        if (!validStates.includes(state)) throw new Error(`Invalid state ${state}`);
        
        const names = [];
        const result = this.notes.filter((note)=> {if(note.state === state) names.push(note.name)}); 
        return names
    
    }
}
