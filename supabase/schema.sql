-- Gray Cup Storefront — Supabase Schema
-- Run this in the Supabase SQL editor to create all tables.

-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ─────────────────────────────────────────────
-- contact_submissions
-- ─────────────────────────────────────────────
create table if not exists contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  company     text not null,
  company_size text not null,
  message     text not null,
  status      text not null default 'pending',
  resolved    boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- quote_requests
-- ─────────────────────────────────────────────
create table if not exists quote_requests (
  id            uuid primary key default gen_random_uuid(),
  company_name  text not null,
  contact_name  text not null,
  email         text not null,
  phone         text,
  grade         text,
  quantity      integer not null,
  message       text,
  product_id    text,
  status        text not null default 'pending',
  resolved      boolean not null default false,
  created_at    timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- sample_requests
-- ─────────────────────────────────────────────
create table if not exists sample_requests (
  id                uuid primary key default gen_random_uuid(),
  company_name      text not null,
  category          text not null,
  other_category    text,
  gst               text not null,
  phone             text not null,
  email             text,
  address           text not null,
  selected_products text[] not null default '{}',
  payment_status    text not null default 'pending',
  resolved          boolean not null default false,
  created_at        timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- feedback_submissions
-- ─────────────────────────────────────────────
create table if not exists feedback_submissions (
  id            uuid primary key default gen_random_uuid(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  feedback_type text not null default '',
  rating        text not null default '',
  feedback      text not null,
  resolved      boolean not null default false,
  created_at    timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- product_requests
-- ─────────────────────────────────────────────
create table if not exists product_requests (
  id           uuid primary key default gen_random_uuid(),
  first_name   text not null,
  last_name    text not null,
  email        text not null,
  phone        text not null,
  category     text not null default '',
  product_name text not null,
  quantity     text,
  details      text,
  status       text not null default 'pending',
  resolved     boolean not null default false,
  created_at   timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- call_requests
-- ─────────────────────────────────────────────
create table if not exists call_requests (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  phone        text not null,
  company_name text not null,
  agenda       text not null,
  resolved     boolean not null default false,
  created_at   timestamptz not null default now()
);
