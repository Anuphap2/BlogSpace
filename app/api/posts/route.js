import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ posts: data || [] });
}

export async function POST(request) {
  const body = await request.json();
  const { title, excerpt, content, author, image, category, tags, read_time } = body;

  if (!title || !content || !author) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({
      title,
      excerpt,
      content,
      author,
      image,
      category,
      tags,
      read_time,
      views: 0,
      likes: 0,
      comments_count: 0,
    })
    .select('*')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: data }, { status: 201 });
}


