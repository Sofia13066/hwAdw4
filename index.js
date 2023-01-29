let group = {
    title: 'Java 2022',
    students: ['Olga', 'Anastasia', 'Sophia'],
    showList: function (){
        const show = (name) =>
           console.log(`${this.title}: ${name}`);
        
        this.students.forEach(show);
    }
}

//unmodifiable
group.showList();
const newGroup = group;
group = null;
console.log('=========================');
newGroup.showList();