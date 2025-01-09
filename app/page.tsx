import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus, Minus, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { RevenueChart, SubscriptionChart, ExerciseChart, MoveGoalChart } from "../sections/Charts"

// Sample data for charts
const revenueData = [
  { value: 400 }, { value: 340 }, { value: 320 }, { value: 300 }, 
  { value: 310 }, { value: 305 }, { value: 450 }
]

const subscriptionData = [
  { value: 1200 }, { value: 1600 }, { value: 1000 }, { value: 1400 }, 
  { value: 800 }, { value: 1100 }, { value: 1000 }, { value: 900 }
]

const exerciseData = [
  { value: 100 }, { value: 200 }, { value: 500 }, { value: 400 }, 
  { value: 300 }, { value: 450 }, { value: 400 }, { value: 350 },
  { value: 300 }, { value: 350 }, { value: 340 }, { value: 360 }
]

const teamMembers = [
  { name: 'Sofia Davis', email: 'm@example.com', role: 'Owner', avatar: '/avatars/01.png' },
  { name: 'Jackson Lee', email: 'p@example.com', role: 'Member', avatar: '/avatars/02.png' },
  { name: 'Isabella Nguyen', email: 'i@example.com', role: 'Member', avatar: '/avatars/03.png' },
]

const payments = [
  { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
  { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
  { status: 'Pending', email: 'morgan@netflix.com', amount: '$195.00' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Welcome Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to your app</h1>
        <p className="text-xl text-gray-400 mb-8">Start chatting to edit your app</p>
        <Button className="bg-white text-black hover:bg-gray-200">
          Start Chatting
        </Button>
      </div>

      <div className="flex flex-col gap-4 p-8">
        {/* Top Stats Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$15,231.89</div>
              <p className="text-xs text-gray-400">+20.1% from last month</p>
              <div className="h-[80px] mt-4">
                <RevenueChart data={revenueData} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-gray-400">Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+2350</div>
              <p className="text-xs text-gray-400">+180.1% from last month</p>
              <div className="h-[80px] mt-4">
                <SubscriptionChart data={subscriptionData} />
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2 bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-gray-400">Exercise Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[80px]">
                <ExerciseChart data={exerciseData} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-sm font-medium">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-sm text-gray-400">{member.email}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                      {member.role} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-sm font-medium">Move Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between space-x-4">
                <Button variant="outline" size="icon" className="border-gray-800 hover:bg-gray-800 text-white">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold text-white">350</div>
                  <p className="text-sm text-gray-400">CALORIES/DAY</p>
                </div>
                <Button variant="outline" size="icon" className="border-gray-800 hover:bg-gray-800 text-white">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 h-[60px]">
                <MoveGoalChart data={subscriptionData} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-white text-sm font-normal">June 2023</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="border-gray-800 hover:bg-gray-800 text-white">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-800 hover:bg-gray-800 text-white">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar 
                className="rounded-md border border-gray-800 text-white" 
                classNames={{
                  day_selected: "bg-white text-black hover:bg-gray-200",
                  day: "text-gray-400 hover:bg-gray-800",
                  day_today: "bg-gray-800 text-white",
                  head_cell: "text-gray-400",
                  cell: "text-gray-400",
                  nav_button: "text-gray-400 hover:bg-gray-800",
                  caption: "text-gray-400",
                }}
              />
            </CardContent>
          </Card>

          <Card className="col-span-3 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-sm font-normal">Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map((payment, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${
                        payment.status === 'Success' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      <div className="text-sm text-white">{payment.email}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-white">{payment.amount}</div>
                      <Button variant="ghost" size="icon" className="hover:bg-gray-800 text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}