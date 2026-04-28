"use client";
import { UpdateUserPage } from "@/components/UpdateUserPage";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const UserPage = () => {
  const userData = authClient.useSession();

  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <h2 className="text-2xl font-bold my-3">User Info</h2>

      <Card className="flex flex-col gap-1 items-center">
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold text-xl">{user?.name}</h2>
        <h2 className="font-bold text-xl">{user?.email}</h2>
        <UpdateUserPage></UpdateUserPage>
      </Card>
    </div>
  );
};

export default UserPage;
