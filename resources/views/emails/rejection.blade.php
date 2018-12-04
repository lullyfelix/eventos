@component('mail::message')
{!! $invitation->getViewVariables()['rejection_text'] !!}<img src="{{ route('notifications.received', [$notification->uuid, 'images|dummy.png']) }}" alt="">

<table>
<tr>
<td>
@component('mail::button', ['color' => 'error', 'url' => route('invitations.reject', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Declinar
@endcomponent
</td>
<td>
@component('mail::button', ['url' => route('invitations.accept', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Aceitar
@endcomponent
</td>
</tr>
</table>

@include('emails.signature')

@endcomponent
