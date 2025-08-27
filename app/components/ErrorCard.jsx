import { IconAlertSquareRounded } from "@tabler/icons-react";

export default function ErrorCard({ title, message }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-12 py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl border shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <IconAlertSquareRounded className="h-5 w-5 text-red-500" />
              <h3 className="text-lg font-semibold text-red-500 leading-none tracking-tight">
                {title}
              </h3>
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-gray-600">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
