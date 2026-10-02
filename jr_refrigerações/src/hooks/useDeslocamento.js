import { useState } from 'react'
import { travelRegions } from '../data/storage.js'

// Finalidade: manter a cidade escolhida no simulador e calcular a taxa estimada com base nas faixas locais.
export function useDeslocamento() {
  // Guarda a cidade selecionada pelo visitante no simulador de deslocamento.
  const [selectedCity, setSelectedCity] = useState('Recife')
  const selectedRegion = travelRegions.find((region) => region.city === selectedCity)
  return { cities: travelRegions, selectedCity, setSelectedCity, estimatedFee: selectedRegion?.fee ?? 0, selectedRegion }
}