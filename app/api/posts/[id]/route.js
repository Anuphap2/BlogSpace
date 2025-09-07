import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabaseClient';

export async function GET(_req, { params }) {
  const supabase = getSupabaseClient();
  const id = params.id;
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ post: data });
}

export async function PATCH(request, { params }) {
  const supabase = getSupabaseClient();
  const id = params.id;
  const body = await request.json();

  const { data, error } = await supabase
    .from('posts')
    .update(body)
    .eq('id', id)
    .select('*')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ post: data });
}

export async function DELETE(_req, { params }) {
  const supabase = getSupabaseClient();
  const id = params.id;
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}


