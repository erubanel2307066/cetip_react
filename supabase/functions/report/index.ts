import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
        )

        // 1. Validar Usuario (JWT)
        const { data: { user }, error: authError } = await supabaseClient.auth.getUser()
        if (authError || !user) throw new Error('Unauthorized')

        // 2. Obtener parámetros (termId, studentId)
        const url = new URL(req.url)
        const termId = url.searchParams.get('termId')
        const queryStudentId = url.searchParams.get('studentId')

        // 3. Validar Rol
        const { data: profile } = await supabaseClient
            .from('profiles')
            .select('role, student_id')
            .eq('id', user.id)
            .single()

        let finalStudentId = profile.student_id
        if (profile.role === 'admin' && queryStudentId) {
            finalStudentId = queryStudentId
        }

        // STUB: Aquí se realizaría la consulta a 'grades' y se generaría el PDF
        console.log(`Generando boleta para Estudiante: ${finalStudentId} | Periodo: ${termId}`)

        return new Response(
            JSON.stringify({
                message: "PDF Generation Stub",
                studentId: finalStudentId,
                termId: termId,
                url: "https://ejemplo.com/boleta_render_stub.pdf"
            }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
        )

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 400
        })
    }
})
