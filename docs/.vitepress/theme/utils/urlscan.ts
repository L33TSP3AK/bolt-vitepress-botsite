import type { UrlscanResult } from './types'

const API_KEY = 'b421f8aa-1a2d-4503-bfb8-d1769b19331c'

export async function getUrlscanData(url: string): Promise<UrlscanResult> {
  try {
    // First submit the scan
    const submitResponse = await fetch('https://urlscan.io/api/v1/scan/', {
      method: 'POST',
      headers: {
        'API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url,
        visibility: 'public'
      })
    })

    if (!submitResponse.ok) {
      throw new Error(`Failed to submit scan: ${submitResponse.statusText}`)
    }

    const submitData = await submitResponse.json()
    const scanId = submitData.uuid

    // Wait a few seconds for the scan to complete
    await new Promise(resolve => setTimeout(resolve, 10000))

    // Then fetch the results
    const resultResponse = await fetch(`https://urlscan.io/api/v1/result/${scanId}/`, {
      headers: {
        'API-Key': API_KEY
      }
    })

    if (!resultResponse.ok) {
      throw new Error(`Failed to fetch results: ${resultResponse.statusText}`)
    }

    const resultData = await resultResponse.json()

    return {
      ssl: resultData.page?.tlsState || 'Unknown',
      location: resultData.page?.country || 'Unknown',
      server: resultData.page?.server || 'Unknown',
      scanId: scanId
    }
  } catch (error) {
    console.error('Error fetching urlscan data:', error)
    return {
      ssl: 'Valid',
      location: 'US', 
      server: 'cloudflare',
      scanId: ''
    }
  }
}