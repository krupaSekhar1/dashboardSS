import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts'
  
  const data = [
    {
      name: 'Week1',
      Guest: 390,
      User: 410,
    },
    {
      name: 'Week2',
      Guest: 205,
      User: 150,
    },
    {
      name: 'Week3',
      Guest: 300,
      User: 450,
    },
    {
      name: 'week4',
      Guest: 210,
      User: 380,
    },
  ]
  
  export default class Example extends LineChart {
    static demoUrl =
      'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi'
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="30%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{left: 30, right: 30}} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="User"
              stroke="#8884d8"
              activeDot={{r: 8}}
            />
            <Line type="monotone" dataKey="Guest" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      )
    }
  }
  