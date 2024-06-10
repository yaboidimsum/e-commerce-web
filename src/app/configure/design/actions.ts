'use server'

import { db } from '@/db'
import { TeesColor, TeesFinish, TeesMaterial, TeesModel } from '@prisma/client'

export type SaveConfigArgs = {
  color: TeesColor
  finish: TeesFinish
  material: TeesMaterial
  model: TeesModel
  configId: string
}

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  })
}
