import { describe, expect, it } from '@jest/globals'
import request from 'supertest'
import express from 'express'
import app from './app'

describe('jest and supertest functionality', () => {
  
  it('checks if jest is working', () => {
    expect(true).toBe(true)
  })

  it('checks if supertest is working', () => {
    request(express()).get('/').then((response) => {
      expect(response.status).toBe(404)
    })
  })
})

describe('Main app', () => {

  it('checks if the main app is running', async () => {
    const response = await request(app).get('/IsServerAlive')
    expect(response.status).toBe(200)
  })
})