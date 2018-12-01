<?php

namespace App\Data\Models;

use Ramsey\Uuid\Uuid;
use App\Data\Repositories\Invitations;
use Illuminate\Notifications\Notifiable;

class Notification extends Base
{
    use Notifiable;

    /**
     * @var array
     */
    protected $fillable = ['invitation_id', 'subject', 'destination'];

    protected $table = 'notifications';

    public function save(array $options = [])
    {
        $this->uuid = $this->uuid ?? (string) Uuid::uuid4();

        if ($this->isDirty('created_at')) {
            $this->created_by_id = $this->getCurrentAuthenticatedUserId();
        }

        if ($this->isDirty('updated_at')) {
            $this->updated_by_id = $this->getCurrentAuthenticatedUserId();
        }

        return parent::save($options);
    }

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function markAsSent()
    {
        $this->sent_at = now();

        $this->sent_by_id = $this->getCurrentAuthenticatedUserId();

        $this->save();

        $this->invitation->markAsSent();
    }

    public function markAsReceived()
    {
        $this->received_at = now();

        $this->save();

        $this->invitation->received_at = now();

        $this->invitation->save();
    }

    public function routeNotificationForMail()
    {
        return $this->destination;
    }

    public function invitations()
    {
        return app(Invitations::class)->getAllInvitationsFor($this->invitation);
    }
}
