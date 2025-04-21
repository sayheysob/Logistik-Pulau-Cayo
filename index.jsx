// TransCheckLog.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, User, Clock } from "lucide-react";

const dummyData = {
  name: "Nansu S Harmony",
  status: "Training",
  duty: "Off Duty",
  totalHours: "0h 0m",
  averageDaily: "0h 0m",
  activities: [
    {
      date: "30/03/2025",
      total: "1h 37m",
      time: "30/03/25 17:22 - 30/03/25 19:00"
    },
    {
      date: "28/03/2025",
      total: "0h 13m",
      time: "29/03/25 00:00 - 29/03/25 00:13"
    }
  ]
};

export default function TransCheckLog() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = () => {
    // Simulasikan pencarian
    if (search.toLowerCase() === "nansu s harmony") {
      setUser(dummyData);
    } else {
      setUser(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Trans Check Log</h1>

      <div className="mb-4">
        <Input
          placeholder="Nama Anggota Trans"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />
        <Button onClick={handleSearch}>Cari</Button>
      </div>

      {user && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <User className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.status} • {user.duty}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-gray-100 rounded-xl">
                <Clock className="mb-1" />
                <p className="text-sm">Total Jam</p>
                <p className="font-bold">{user.totalHours}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <CalendarDays className="mb-1" />
                <p className="text-sm">Rata-Rata Jam Harian</p>
                <p className="font-bold">{user.averageDaily}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="default">On Duty</Button>
              <Button variant="outline">Off Duty</Button>
              <Button variant="outline">Cuti</Button>
              <Button variant="destructive">Resign</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {user && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Aktivitas Terakhir</h2>
          {user.activities.map((act, idx) => (
            <Card key={idx} className="mb-2">
              <CardContent className="p-3">
                <p className="font-medium">{act.date}</p>
                <p className="text-sm">Total Jam: {act.total}</p>
                <p className="text-xs text-gray-500">{act.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
