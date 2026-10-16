import AppButton from "@/app/ui/AppButton";
import AppCard from "@/app/ui/AppCard";
import CheckListIcon from "@mui/icons-material/Checklist";
import CheckCircleOutlineIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import AppPieChart from "@/app/ui/Appcharts";
import AppTaskList from "@/app/ui/AppList";
import AppProgressBar from "@/app/ui/AppProgressBar";

const tasks = [
    {
        title: "Total task",
        value: 24,
        description: "Across all projects",
        icon: <CheckListIcon />,
        accent: "primary"
    },
    {
        title: "Completed",
        value: 16,
        description: "Completed tasks",
        icon: <CheckCircleOutlineIcon />,
        accent: "success"
    },
    {
        title: "in-Progress",
        value: 5,
        description: "currently active",
        icon: <AccessTimeIcon />,
        accent: "warning"
    },
    {
        title: "overdue",
        value: 4,
        description: "need attention",
        icon: <EventBusyIcon />,
        accent: "danger"
    }
] as const

const taskDistribution = [
    { id: 0, label: "Completed", value: 16, color: "#16A34A" },
    { id: 1, label: "In Progress", value: 5, color: "#F59E0B" },
    { id: 2, label: "Overdue", value: 3, color: "#EF4444" },
    { id: 3, label: "design", value: 10, color: "#dd1ae0" }
];

const recentTasks = [
    { id: 1, title: "Design dashboard" },
    { id: 2, title: "Implement login" },
    { id: 3, title: "Fix responsive layout" },
    {id:4 , title: "deploy changes "},
    {id:5 , title: "deploy changes "},
]

export default function Dashboard() {
    return (
        <main className="w-full min-w-0 px-6 py-6">
            <div className="mx-auto w-full max-w-7xl space-y-6">

                {/* Dashboard Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Dashboard
                    </h1>

                    <AppButton variant="primary">
                        Add Task
                    </AppButton>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {tasks.map((stat) => (
                        <AppCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            description={stat.description}
                            icon={stat.icon}
                            accent={stat.accent}
                        />
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">
                    <AppPieChart
                        title="Task Status Overview"
                        data={taskDistribution}
                        donut
                        showLegend
                    />

                    <AppTaskList
                        title="Upcoming tasks"
                        tasks={recentTasks}
                    />
                </div>
                <div>
                    <AppProgressBar totalTask={100} completedTask={28}></AppProgressBar>
                </div>
            </div>
        </main>
    );
}