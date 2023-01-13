import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Stack, IStackTokens, List, initializeIcons, IIconProps } from '@fluentui/react';
import {ActionButton, DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import {IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import './App.css'
import { Dropdown,IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { IconButton } from '@fluentui/react/lib/Button';
const ChevronLeftSmall: IIconProps = { iconName: 'ChevronLeftSmall' };
const ChevronRightSmall: IIconProps = { iconName: 'ChevronRightSmall' };
const ChevronLeftEnd6: IIconProps = { iconName: 'ChevronLeftEnd6' };
const ChevronRightEnd6: IIconProps = { iconName: 'ChevronRightEnd6' };
// const ExcelDocument: IIconProps = { iconName: 'ExcelDocument' };
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300},
};
initializeIcons();
const optionssex: IChoiceGroupOption[] = [
  { key: 'H', text: 'Homme' },
  { key: 'F', text: 'Femme' },
]
const options: IDropdownOption[] = [
  { key: 'bouskoura', text: 'Bouskoura' },
  { key: 'casablanca', text: 'Casablanca' },
  { key: 'rabat', text: 'Rabat' },
  { key: 'tanger', text: 'Tanger' },
  { key: 'oujda', text: 'Oujda' },
  { key: 'khouribga', text: 'Khouribga' },
];
const stackTokensD: IStackTokens = { childrenGap: 20 };
const stackTokensT = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
// export interface IButtonExampleProps {
//   disabled?: boolean;
//   checked?: boolean;
// }
const stackTokens: IStackTokens = { childrenGap: 160 };
const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});
const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };
// const stackTokens1: IStackTokens = { childrenGap: 20 };
// By default the field grows to fit available width. Constrain the width instead.
const options_element: IDropdownOption[] = [
  { key: '5', text: '5' },
  { key: '10', text: '10' },
  { key: '20', text: '20' },
  { key: '30', text: '30' },
  { key: '40', text: '40' },
  { key: '50', text: '50' },
];
// const dropdownStyles1: Partial<IDropdownStyles> = {
//   dropdown: { width: 90 ,}
// };
export interface IDetailsListBasicExampleItem {
  id: string;
  key: number;
  name: string;
  value: number;
}
interface IGetform{
  id : number
  name : string
  age: number
  email : string
  ville : string
  prenom : string
  adresse : string
  sexe : string
}
export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
  Dateform:IGetform
  list : Array<IGetform>
  selectv : IGetform
  isEditing: boolean
  currentPage: number,
  todosPerPage: number
  count : number
  // disabled : boolean
  // green : boolean
  // count: number
  // temp_id:number
}
let i= 2
// console.log(cont())
class App extends React.Component<{},IDetailsListBasicExampleState>{
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _alllist: Array<IGetform>= []
  private _columns: IColumn[];
  constructor(props: {}) {
    super(props);
    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });
    this._allItems =[];
    // this._alllist = this.state.list
    this._columns = [
      { key: 'column1', name: 'Id', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Prenom', fieldName: 'prenom', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column4', name: 'Age', fieldName: 'age', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column5', name: 'Email', fieldName: 'email', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column6', name: 'Ville', fieldName: 'ville', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column7', name: 'Adresse', fieldName: 'adresse', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column8', name: 'Sexe', fieldName: 'sexe', minWidth: 100, maxWidth: 200, isResizable: true },
    ];
    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
      Dateform : {id:1,name:"",prenom:"",age:0,ville:"",email:"",adresse:"",sexe:""},
      list:[],
      selectv:{id:1,name:"",prenom:"",age:0,ville:"",email:"",adresse:"",sexe:""},
      isEditing:false,
      currentPage: 1,
      todosPerPage: 5,
      count : 1,
      // disabled : false
      // green : true
      // count: 0
      // temp_id:0
    };
    this.getvalueVille =this.getvalueVille.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this._onDeleteRow = this._onDeleteRow.bind(this)
    this.ClearForm = this.ClearForm.bind(this)
    this.view  = this.view.bind(this)
    this.updateitem = this.updateitem.bind(this)
    this.Miseajour = this.Miseajour.bind(this)
    this.handleClick = this.handleClick.bind(this) 
    this.select_element = this.select_element.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
    this.precedentelement = this.precedentelement.bind(this)
    this.suivantelement = this.suivantelement.bind(this)
  }
  public render(): JSX.Element {
    const { items, selectionDetails } = this.state; 
    const {list, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = this.state.count * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers);
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
          <>
        {/* <button
          key={number}
          className="pagination"
          id={number.toString()}
          onClick={this.previousQuestion}>
          {"<<"}
        </button>
        <span>1</span>
        <button
          key={number}
          className="pagination"
          id={number.toString()}
          onClick={this.nextQuestion}>
          {">>"}
        </button> */}
        </>
      );
    });
    console.log(renderPageNumbers);
    return (
      <Stack className="formaze" >
        <div className={exampleChildClass}>{selectionDetails}</div>
        <Announced message={selectionDetails} />
          <div className="fields">
            <Stack {...columnProps} >
            <TextField label="Name" styles={{fieldGroup:{width : 280}}}
            placeholder="Entrer First Name"
            value={this.state.Dateform.name}
            onChange={(e:any)=>this.setState({Dateform:{...this.state.Dateform,name:e.target.value}})}
            required/>
            </Stack>
            <Stack {...columnProps} >
            <TextField label="Prenom" styles={{fieldGroup:{width : 280}}} 
            placeholder="Entrer First Prenom"
            value={this.state.Dateform.prenom}
            onChange={(e:any)=>this.setState({Dateform:{...this.state.Dateform,prenom:e.target.value}})}
            required/>
            </Stack>
            <Stack {...columnProps} >
            <TextField label="Age"  styles={{fieldGroup:{width : 280}}} type="number"
            placeholder="Entrer First Age"
            value={this.state.Dateform.age.toString()}
            onChange={(e:any)=>this.setState({Dateform:{...this.state.Dateform,age:e.target.value}})}
            required/>
            </Stack> 
          </div>
          <div className="fields">
            <Stack {...columnProps} >
            <TextField label="Email" styles={{fieldGroup:{width : 280}}}  
            placeholder="Entrer First Email"
            value={this.state.Dateform.email}
            onChange={(e:any)=>this.setState({Dateform:{...this.state.Dateform,email:e.target.value}})}
            required/>
            </Stack>
            <Stack tokens={stackTokensD}>
            <Dropdown
            placeholder="Select an Ville"
            label="Ville"
            options={options}
            styles={dropdownStyles}
            onChange={this.getvalueVille}
            defaultSelectedKey={this.state.Dateform.ville}
            required/>
            </Stack>
            <Stack>
            <Stack {...columnProps}>
            <TextField label="Adresse" multiline rows={3}  
            styles={{fieldGroup:{width : 280}}}
            value={this.state.Dateform.adresse}
            onChange={(e:any)=>this.setState({Dateform:{...this.state.Dateform,adresse:e.target.value}})}
            required/>
            </Stack>
            </Stack>
          </div>
          <div className="fields">
            <ChoiceGroup  
            options={optionssex} label="Sexe" 
            onChange={this._onChange}
            required/>
        </div>
        <TextField
          className={exampleChildClass}
          label="Search"
          onChange={this._onFilter}
          styles={textFieldStyles}
        />
        <Stack horizontal tokens={stackTokens}>
        <DefaultButton text="Cancel" onClick={this.ClearForm} style={{background:"white", color:"black",display: "inline"}}  allowDisabledFocus/>
        <PrimaryButton  text="Add" onClick={this.handleAddClick} style={{marginLeft:"200px"}}allowDisabledFocus/>
        <DefaultButton text={this.state.isEditing ? "Mise à jour" : "Update"} onClick={this.state.isEditing ?this.Miseajour : this.updateitem} style={{background:"#217346", color:"white",display: "inline",marginLeft:"200px"}}
        allowDisabledFocus
        />
        <DefaultButton text="Delete"onClick={this._onDeleteRow} style={{background:"#a4373a", color:"white",display: "inline",marginLeft:"200px"}} allowDisabledFocus/>
        <PrimaryButton  text="View" onClick={this.view}
        style={{background:"#11255e", color:"white",display: "inline",marginLeft:"200px"}} 
        allowDisabledFocus/>
        </Stack>
        <Announced message={`Number of items after filter applied: ${items.length}.`} />
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={currentTodos}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
        <div style={{textAlign: "right"}}>
        {/* {renderPageNumbers} */}
        <IconButton         
        iconProps={ChevronLeftEnd6} aria-label="ChevronLeftEnd6"
        style={{ height : "auto" , color : "black"}} 
        onClick={this.precedentelement}>
          {"<<"}
        </IconButton>
        <IconButton
          iconProps={ChevronLeftSmall} aria-label="ChevronLeftSmall"
          style={{height : "auto"}}
          onClick={this.previousQuestion}
          >
          {"<"}
        </IconButton>
        <span  style={{fontSize : "25px" , backgroundColor : "white" , height : "auto" , borderColor : "#11255e"}}>{this.state.count}</span>
        <IconButton
          iconProps={ChevronRightSmall} aria-label="ChevronRightSmall"
          style={{ height : "auto" , }}
          onClick={this.nextQuestion}>
          {">"}
        </IconButton>
        <IconButton 
        onClick={this.suivantelement}
        style={{height :"auto" , color : "black"}}
        iconProps={ChevronRightEnd6} aria-label="ChevronRightEnd6"
        >
          {">>"}
        </IconButton>
        </div>
        <div  style={{textAlign : "right" , display : "grid" , width:"70px" , right : '70px'}}>
        <Dropdown
        style={{fontSize : "18px"}}
        placeholder='5'
        options={options_element}
        onChange = {this.select_element}
        />
        {/* <IconButton iconProps={ExcelDocument} aria-label="ExcelDocument" style={{color : "green"}}/> */}
        </div>
        {/* <IconButton iconProps={View} aria-label="InternetSharing"/> */}
      </Stack>
      
    )
  }
  cont (){  
    return i++
  }
  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();
    switch (selectionCount) {
      case 0:
          return 'No items selected';
      case 1:
        this.setState({selectv:(this._selection.getSelection()[0] as IGetform)})
        return '1 item selected: ' 
        + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).id;
      default:
        return `${selectionCount} items selected`;
    }
  }
  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    // this._alllist = this.state.list
    this.setState({
      list : text ? this._alllist.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._alllist,
    });
  };
  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };
  private submitform =(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    const contact = {
      id : this.state.Dateform.id,
      name : this.state.Dateform.name,
      prenom : this.state.Dateform.prenom,
      email : this.state.Dateform.email,
      ville : this.state.Dateform.ville,
      adresse : this.state.Dateform.adresse,
      sexe : this.state.Dateform.sexe,
      age : this.state.Dateform.age,
    }
    console.log(contact)
  }
  private _onChange=(ev: any, option: IChoiceGroupOption):void =>{
    // (e:any)=>this.setState({Dateform:{...this.state.Dateform,sexe:e.target.value}})
    this.setState({Dateform:{...this.state.Dateform,sexe:option.text}})
    console.log(ev,option.text);
  }
  private getvalueVille(ev: any,option: { text: any; }){
    // this.setState({Dateform:{...this.state.Dateform,ville:'gjh'}})
    this.setState({Dateform:{...this.state.Dateform,ville:option.text}})
    console.log(option.text)
  }
  handleAddClick(){
    console.log(this.state.list)
    // this.cont()
    this.setState({Dateform:{...this.state.Dateform},
    list:[...this.state.list, this.state.Dateform]
    })
    this.setState({Dateform:{id:this.cont(),name:"",prenom:"",age:0,email:"",sexe:"",adresse:"",ville:""}})
    this._alllist = this.state.list
  }
  ClearForm(){
    this.setState({Dateform:{id:1,name:"",prenom:"",age:0,email:"",sexe:"",adresse:"",ville:""}})
    console.log(this.state.Dateform)
  }
  private _onDeleteRow = (): void => {
    if (this._selection.getSelectedCount() > 0) {
      this.setState((previousState: IDetailsListBasicExampleState) => {
        return {
          list: previousState.list.filter((item: any, index: number) => !this._selection.isIndexSelected(index)),
        };
      });
    } else {
      this.setState({
        list: List.filter((name: any) => name !== name)
      });
    }
  };
  view(){
    alert(
        `
        id = ${this.state.selectv.id}
        Name = ${this.state.selectv.name}\n
        Prenom = ${this.state.selectv.prenom}
        Email = ${this.state.selectv.email}\n
        Age = ${this.state.selectv.age}
        Ville = ${this.state.selectv.ville}\n
        Adresse = ${this.state.selectv.adresse}
        Sexe = ${this.state.selectv.sexe}\n
        `
    )
  }
  // componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IDetailsListBasicExampleState>, snapshot?: any): void {
  //   console.log("componentDidupdate",prevProps,prevState,snapshot)
  //   if(prevState.list === this.state.list){
  //     this.setState({
  //        list:this.state.list
  //     })
  //   }
  // }

  updateitem(){
    // console.log(this.state.selectv)
    this.setState({Dateform:this.state.selectv,isEditing:true})
  }
  Miseajour(e:any){
    // e.preventDefault();
    let list1 = this.state.list;
    // for (const item of list1){
    //   if(this.state.selectv.id== item.id){
    //     console.log(item.id)
    //   }
    // }
    for (var i = 0; i < list1.length; i++) {
      // console.log(list1[i].id);
      if(this.state.selectv.id== list1[i].id){
        list1[i]= this.state.Dateform
      }
      console.log(this.state.Dateform)
    }
    this.state.Dateform;
    this.setState({
        list :list1,
        Dateform:{id:1,name:"",prenom:"",age:0,email:"",sexe:"",adresse:"",ville:""},
        isEditing:false,
    });
    this._alllist = this.state.list
  }
  handleClick = (event:any) => {
    console.log("dcdcdijcd",event.target.id)
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  select_element(e: any, options_element: { text: any; }){
    //this.setState({Dateform:{...this.state.Dateform,sexe:option.text}})
    this.setState({todosPerPage:options_element.text})
    console.log(options_element.text)  
  };
  nextQuestion () {
    // this.setState({ count: this.state.count + 1 })
    if((this.state.list.length / this.state.todosPerPage) >= this.state.count){
      this.setState({ count: this.state.count + 1 });
    }
    // console.log((this.state.list.length / this.state.todosPerPage) >= this.state.count)
  }
  previousQuestion () {
    if(this.state.count !== 1){
      this.setState({ count: this.state.count - 1 });
    }
    // else{
    //   this.setState({
    //     disabled: false
    //   })
    // }
  }
  precedentelement(){
    this.setState({count : 1})
  }
  suivantelement(){
    this.setState(({count : Math.ceil(this.state.list.length / this.state.todosPerPage )}))
  }

  
}

export default App
function handleChange(event: Event | undefined) {
  throw new Error("Function not implemented.");
}
