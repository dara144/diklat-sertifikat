import Sertifikat from 'model/sertifikat'
import dataSertifikat from 'db/sertifikat.json'
const SertifikatSY = async () => {
  await Sertifikat.sync()
  for (const data of dataSertifikat) {
    await addSertifikat(data)
  }
}
export default SertifikatSY

interface Add {
  id: number
  kdIHT: string
  kdSertifikat: string
  nip: string
  nama: string
}
async function addSertifikat(data: Add) {
  const { id, kdIHT, kdSertifikat, nip, nama } = data
  await Sertifikat.findOrCreate({
    where: { id },
    defaults: { kdIHT, kdSertifikat, nip, nama }
  })
}
// type SertifikatSY = () => Promise<Sertifikat>
