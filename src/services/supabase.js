import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tgyskavgqrywxynmnijk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRneXNrYXZncXJ5d3h5bm1uaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzODYzMzEsImV4cCI6MjAxNzk2MjMzMX0.vPltsIpQtDlDpWP7UEAuuCODB28Ql-X86bI_YWS25oU';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;