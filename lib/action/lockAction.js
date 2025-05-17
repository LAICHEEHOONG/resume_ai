"use server";

import dbConnect from "../dbConnect";
import Lock from "@/models/Lock";

export async function lockAction(lock) {
  await dbConnect();

  try {
    // 更新已存在的 Lock 文档，或创建一个新的（upsert）
    await Lock.findOneAndUpdate(
      {}, // 查询条件为空，表示只维护一个 lock 文档
      { lock: !!lock }, // 将布尔值存入数据库
      { upsert: true, new: true } // 如果没有就创建，有就更新
    );

    return {
      success: true,
      message: lock
        ? "Successfully locked the webpage."
        : "Successfully unlocked the webpage.",
    };
  } catch (error) {
    console.error("Lock action error:", error);
    return {
      success: false,
      message: lock ? "Webpage lock failed." : "Webpage unlock failed.",
    };
  }
}

export async function getLockStatus() {
  await dbConnect();

  try {
    const lockDoc = await Lock.findOne();
    return lockDoc?.lock ?? false; // 如果没有记录，默认返回 false（未锁定）
  } catch (error) {
    console.error("Error fetching lock status:", error);
    return false; // 出错时也返回 false
  }
}
