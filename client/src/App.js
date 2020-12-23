import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress:{
    margin : theme.spacing.unit * 2
  }
})

// const customers = [
// {
//   'id' : 1,
//   'image' : 'https://placeimg.com/64/64/any/1',
//   'name' : '홍길동',
//   'birthday' : '919119',
//   'gender' : '남자',
//   'job' : '대학생'
// },
// {
//   'id' : 2,
//   'image' : 'https://placeimg.com/64/64/any/2',
//   'name' : '훙길둥',
//   'birthday' : '313141',
//   'gender' : '남자',
//   'job' : '대학생'
// }
// ]

/*
---React LiftCycle 구조---
1) constructor() // 불러오고
2) componentWillMount() // 마운트되기전에 
3) render() // 화면에 그리고
4) componentDidMount() // 불러와짐

props or state => shouldComponentUpdate() // 화면 변화를 감지 후 다시 그려줌
*/






class App extends Component{

  state = {
    customers: "",
    completed : 0
  }

  componentDidMount(){
    // callApi를 불러와서 then함수로 하여금 res라는 이름으로 바뀌고 데이터를 customers에 담는다
    this.timer = setInterval(this.progress, 20);
    this.callApi() 
    .then(res => this.setState({customers: res})) 
    .catch(err => console.log(err)); //error 처리
  }

  callApi = async () => {
    const response = await fetch('/api/customers'); // 가져올 api주소 입력
    const body = await response.json();
    return body; // body(데이터) 반환
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed : completed >= 100 ? 0 : completed + 1 }); // 100이면 0으로 줄어들고 그렇지 않으면 + 1씩 증가
  }


    render(){
      const { classes } = this.props; // props는 변경될 수 없는 데이터를 명시 할때, state는 변경 되는 데이터를 명시 할때 사용
      return(
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableHead>
            <TableBody>
                {
                  this.state.customers ? this.state.customers.map(c => {
                    return(
                    <Customer
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />);
                  }) : 
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>

                    </TableCell>
                  </TableRow>
                }
            </TableBody>
          </Table>
        </Paper>
      );
    }
}
    


export default withStyles(styles)(App);
