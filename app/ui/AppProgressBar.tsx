"use client";

type AppProgressBarProps = {
    completedTask : number,
    totalTask : number
};

export default function AppProgressBar({
      completedTask,
      totalTask
} : AppProgressBarProps) {
       const percentage = totalTask === 0 ? 0 : Math.round((completedTask / totalTask) * 100);
       return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          Progress
        </span>

        <span className="text-sm font-semibold text-[#7C22FA]">
          {percentage}%
        </span>
      </div>

      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-label="Task completion progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="h-full rounded-full bg-[#7C22FA] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-gray-500">
        {completedTask} of {totalTask} tasks completed
      </p>
    </div>
  );
}